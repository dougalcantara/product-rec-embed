import { 
  FEATURE_OPTIONS, 
  REASON_OPTIONS, 
  PRODUCT_ASSOCIATIONS,
} from '../constants';


// return an array of matched reason/feature indexes
const getGroupMatches = (options, chosen, indexes) => {
  const indexMatches = chosen.map(item => {
    const index = options.indexOf(item);
    const matchIndex = indexes.indexOf(index);
    return matchIndex > -1 ? index : matchIndex;
  });
  return indexMatches.filter(i => i > -1);
};

const getWeightedMatches = (categoryName, associations, matches, type) => {
  let resultWeight = 1;
  const weightsByType = associations[categoryName].weights[type];
  if (weightsByType && matches.length > 0) {
    // calc weight value based on # of total options for category
    // return a value that can be used in final calc as a multiplier
    const weightsGroup = matches.map(match => {
      const weightsIndex = match.toString();
      return weightsByType[weightsIndex];
    });

    // get the average by group
    resultWeight = weightsGroup.reduce((a, b) => a + b, 0) / weightsGroup.length;

    // leave in case we need to go back n debug this shit
    // console.log('Type: ', type);
    // console.log('Category', categoryName);
    // console.log('Matches: ', matches);
    // console.log('Weights: ', weightsByType);
    // console.log('Weights array: ', weightsGroup);
    // console.log('Average: ', averageWeight);
  } 
  return resultWeight;
};


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

    const reasonWeight = getWeightedMatches(key, associations, reasonMatches, 'reasons');
    const featureWeight = getWeightedMatches(key, associations, featureMatches, 'features');

    const reasonTotal = reasonMatches.length * reasonWeight;
    const featureTotal = featureMatches.length * featureWeight;

    result[key] = (reasonTotal + featureTotal) / (reasonIndexes.length + featureIndexes.length);
    return result;
  }, {});

  // order groups by relevance
  const matchGroupsOrdered = [ ...assocKeys ];
  matchGroupsOrdered.sort((a, b) => matchRelevance[b] - matchRelevance[a]);

  // Uncomment when debugging
  // console.log('Match Relevance: ', matchRelevance);
  //console.log('Matching groups: ', matchGroupsOrdered)

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