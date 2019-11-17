import { 
  FEATURE_OPTIONS, 
  REASON_OPTIONS, 
  PRODUCT_ASSOCIATIONS,
  PET_PRODUCT_ASSOCIATIONS,
} from '../constants';


// flat list of reason names
const reasonOptions = REASON_OPTIONS.map(opt => opt.name);

// return an array of matched reason/feature indexes
const getGroupMatches = (options, chosen, indexes) => chosen.map(item => {
  const index = options.indexOf(item);
  return indexes.indexOf(index);
}).filter(i => i > -1);



// return a 0 - 100 relevance score per product
export const getRecommendedProducts = (productData, reasons, features, isPet = false) => {
  if (isPet) {
    // return only pet products
  }

  // keys for iterating/sorting
  const assocKeys = Object.keys(PRODUCT_ASSOCIATIONS);

  // get relevance score of each product group
  const matchRelevance = assocKeys.reduce((result, key) => {
    const reasonIndexes = PRODUCT_ASSOCIATIONS[key].reasons;
    const featureIndexes = PRODUCT_ASSOCIATIONS[key].features;

    const reasonMatches = getGroupMatches(reasonOptions, reasons, reasonIndexes);
    const featureMatches = getGroupMatches(FEATURE_OPTIONS, features, featureIndexes);

    result[key] = (reasonMatches.length + featureMatches.length) / (reasonIndexes.length + featureIndexes.length);
    return result;
  }, {});

  // order groups by relevance
  const matchGroupsOrdered = [ ...assocKeys ];
  matchGroupsOrdered.sort((a, b) => matchRelevance[b].score - matchRelevance[a].score);

  // all product id's in order
  const orderedProductIds = matchGroupsOrdered.reduce((result, key, i) => {
    if (i === 0) return result;
    return [ ...result, ...PRODUCT_ASSOCIATIONS[key].id ];
  }, []);

  // most relevant group match (used in hero)
  const { description, url, image } = PRODUCT_ASSOCIATIONS[matchGroupsOrdered[0]];
  
  // hero + product info
  return {
    hero: { heading: matchGroupsOrdered[0], description, url, image },
    products: orderedProductIds.map(id => {
      const [idMatch] = productData.filter(product => id === product.ID);
      return idMatch;
    }),
  };
};