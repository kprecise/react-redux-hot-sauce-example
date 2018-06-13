
/*
 * action creators
 */

export const selectSauce = selectedSauce => ({ 
    type: "SELECTED_SAUCE", 
    sauce: selectedSauce 
});

export const clearSauces = allSauceSelections => ({ 
    type: "CLEAR_SAUCES", 
    sauce: allSauceSelections
});
