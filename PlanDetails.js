/* File which shows the plan details of the subscription */

var PLAN_COSTS = {
  basic: {
    USD : 1,
    GBP : 2
  },
  good: {
    USD : 10,
    GBP : 20
  },
  better: {
    USD : 100,
    GBP : 200
  },
  best: {
    USD : 1000,
    GBP : 2000
  },
};

var PLAN_NAMES = {
  basic: 'Basic',
  good: 'Good',
  better: 'Better',
  best: 'Best',
};

var CURRENCY_NAMES = {
  USD : 'USD',
  GBP : 'GBP'
}

export {PLAN_COSTS, PLAN_NAMES, CURRENCY_NAMES}