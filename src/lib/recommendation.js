import { 
  FEATURE_OPTIONS, 
  REASON_OPTIONS, 
  PRODUCT_ASSOCIATIONS,
} from '../constants';


// return an array of matched reason/feature indexes
const getGroupMatches = (options, chosen, indexes) => chosen.map(item => {
  const index = options.indexOf(item);
  return indexes.indexOf(index);
}).filter(i => i > -1);


// return a 0 - 100 relevance score per product
export const getRecommendedProducts = (productData, reasons, features, mode) => {
  // constants keys match mode
  const associations = PRODUCT_ASSOCIATIONS[mode];
  const reasonOptions = REASON_OPTIONS[mode].map(opt => opt.name);
  const featureOptions = FEATURE_OPTIONS[mode];

  // keys for iterating/sorting
  const assocKeys = Object.keys(associations);

  // get relevance score of each product group
  const matchRelevance = assocKeys.reduce((result, key) => {
    const reasonIndexes = associations[key].reasons;
    const featureIndexes = associations[key].features;

    const reasonMatches = getGroupMatches(reasonOptions, reasons, reasonIndexes);
    const featureMatches = getGroupMatches(featureOptions, features, featureIndexes);

    result[key] = (reasonMatches.length + featureMatches.length) / (reasonIndexes.length + featureIndexes.length);
    return result;
  }, {});

  console.log('Match Relevance: ', matchRelevance);

  // order groups by relevance
  const matchGroupsOrdered = [ ...assocKeys ];
  matchGroupsOrdered.sort((a, b) => matchRelevance[b] - matchRelevance[a]);

  console.log('Matching groups: ', matchGroupsOrdered)

  // all product id's in order
  const orderedProductIds = matchGroupsOrdered.reduce((result, key, i) => {
    if (i === 0) return result;
    return [ ...result, ...associations[key].id ];
  }, []);

  // most relevant group match (used in hero)
  const { description, url, image } = associations[matchGroupsOrdered[0]];
  
  // hero + product info
  return {
    hero: { heading: matchGroupsOrdered[0], description, url, image },
    products: orderedProductIds.map(id => {
      const [idMatch] = productData.filter(product => id === product.ID);
      return idMatch;
    }),
  };
};