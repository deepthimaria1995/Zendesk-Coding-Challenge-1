import { PLAN_NAMES, CURRENCY_NAMES } from './PlanDetails.js';

/* Function to create the user input UI for subscription plan */
function createPlanInput(plans_arr){
  let parentDiv = document.createElement('div');
  let selectList = document.createElement('select');
  selectList.id = 'plan-input';
  parentDiv.appendChild(selectList);

  for (var key in plans_arr) {
    let option = document.createElement('option');
    option.value = key;
    option.text = plans_arr[key];
    selectList.appendChild(option);
  }
  return parentDiv;
};

/* Function to create the label element for subscription plan */
function createPlanLabel(){
  let parentDiv = document.createElement('div');
  parentDiv.className = 'label';
  let label = document.createElement('Label');
  label.setAttribute('for', 'planInput');
  label.innerHTML = 'Plan';
  parentDiv.appendChild(label);
  return parentDiv;
};

/* Function to return subscription plan div*/
function createPlanLayout(){
  let parentDiv = document.createElement('div');
  parentDiv.className = 'edit-plan';
  parentDiv.appendChild(createPlanInput(PLAN_NAMES));
  parentDiv.appendChild(createPlanLabel());
  return parentDiv;
};

/* Function to create the user input UI for subscription seats */
function createSeatsInput(){
  let parentDiv = document.createElement('div');
  let input = document.createElement('input');
  input.id = 'seats-input';
  input.type = 'text';
  input.value = '';
  parentDiv.appendChild(input);
  return parentDiv;
};

/* Function to create the label element for subscription seats */
function createSeatsLabel(){
  let parentDiv = document.createElement('div');
  parentDiv.className = 'label';
  let label = document.createElement('Label');
  label.setAttribute('for', 'seats-input');
  label.innerHTML = 'Seats';
  parentDiv.appendChild(label);
  return parentDiv;
};

/* Function to return subscription seats div */
function createSeatLayout(){
  let parentDiv = document.createElement('div');
  parentDiv.className = 'edit-seats';

  parentDiv.appendChild(createSeatsInput());
  parentDiv.appendChild(createSeatsLabel());
  return parentDiv;
};

/* Function to create the user input UI for subscription currency */
function createCurrencyInput(curr_arr){
  let parentDiv = document.createElement('div');
  let selectList = document.createElement('select');
  selectList.id = 'currency-input';
  parentDiv.appendChild(selectList);

  for (var key in curr_arr) {
    let option = document.createElement('option');
    option.value = key;
    option.text = curr_arr[key];
    selectList.appendChild(option);
  }
  return parentDiv;
};

/* Function to create the label element for subscription currency */
function createCurrencyLabel(){
  let parentDiv = document.createElement('div');
  parentDiv.className = 'label';
  let label = document.createElement('Label');
  label.setAttribute('for', 'currencyInput');
  label.innerHTML = 'Currency';
  parentDiv.appendChild(label);
  return parentDiv;
};

/* Function to return subscription currency div*/
function createCurrencyLayout(){
  let parentDiv = document.createElement('div');
  parentDiv.className = 'edit-currency';
  parentDiv.appendChild(createCurrencyInput(CURRENCY_NAMES));
  parentDiv.appendChild(createCurrencyLabel());
  return parentDiv;
};

/* Function to create the user input UI for subscription price */
function createPriceInput(){
  let parentDiv = document.createElement('div');
  parentDiv.id = 'cost-value';
  return parentDiv;
};

/* Function to create the label element for subscription price*/
function createPriceLabel(){
  let parentDiv = document.createElement('div');
  parentDiv.className = 'label';
  parentDiv.innerHTML = 'Price';
  return parentDiv;
};

/* Function to return subscription price div */
function createPriceLayout() {
  let parentDiv = document.createElement('div');
  parentDiv.className = 'price';

  parentDiv.appendChild(createPriceInput());
  parentDiv.appendChild(createPriceLabel());
  return parentDiv;
};

/* Function to return Submit button div */
function createbtnSubmitLayout() {
  let parentDiv = document.createElement('div');
  parentDiv.className = 'confirm-page-button-section';

  var btnSubmit = document.createElement("BUTTON");
  btnSubmit.id = "submit";
  btnSubmit.disabled = true;
  btnSubmit.innerHTML = "Update Subscription";

  parentDiv.appendChild(btnSubmit);
  return parentDiv;
};

/* Function to create a new subscription layout */
function createSubscription() {
  let parentDiv = document.createElement('div');
  parentDiv.className = 'product';
  parentDiv.appendChild(createPlanLayout());
  parentDiv.appendChild(createSeatLayout());
  parentDiv.appendChild(createCurrencyLayout());
  parentDiv.appendChild(createPriceLayout());
  return parentDiv;
};

export { createSubscription, createbtnSubmitLayout}