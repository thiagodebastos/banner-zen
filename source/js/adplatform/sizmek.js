//Anything you need to do on initiation of the MediaMind code should be put here
function onInit() {

}

//Custom Interaction
function customInt() {
	EB.userActionCounter("InteractionName");
}

//Clickthrough handler
function clickMe(){
	EB.clickthrough();

    console.log('Clickthrough');
}
