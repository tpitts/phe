'use strict'

// Enum-like object for rank categories
const RankCategory = {
  STRAIGHT_FLUSH:  0,
  FOUR_OF_A_KIND:  1,
  FULL_HOUSE:      2,
  FLUSH:           3,
  STRAIGHT:        4,
  THREE_OF_A_KIND: 5,
  TWO_PAIR:        6,
  ONE_PAIR:        7,
  HIGH_CARD:       8
}

// Array of descriptions corresponding to RankCategory
const rankCategoryDescription = [
  'Straight Flush',
  'Four of a Kind',
  'Full House',
  'Flush',
  'Straight',
  'Three of a Kind',
  'Two Pair',
  'One Pair',
  'High Card'
]

/**
 * Converts a hand strength number into a hand rank number
 * `0 - 8` for `STRAIGHT_FLUSH - HIGH_CARD`.
 *
 * @name handRank
 * @function
 * @param {Number} val hand strength (result of an `evaluate` function)
 * @return {Number} the hand rank
 */
function handRank(val) {
  if (val > 6185) return RankCategory.HIGH_CARD;
  if (val > 3325) return RankCategory.ONE_PAIR;
  if (val > 2467) return RankCategory.TWO_PAIR;
  if (val > 1609) return RankCategory.THREE_OF_A_KIND;
  if (val > 1599) return RankCategory.STRAIGHT;
  if (val > 322)  return RankCategory.FLUSH;
  if (val > 166)  return RankCategory.FULL_HOUSE;
  if (val > 10)   return RankCategory.FOUR_OF_A_KIND;
  return RankCategory.STRAIGHT_FLUSH;
}


// Export the functions and constants
exports.RankCategory = RankCategory;
exports.rankCategoryDescription = rankCategoryDescription;
exports.handRank = handRank;