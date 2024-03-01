jQuery.sap.declare("hcm.fab.myprofile.HCMFAB_PRFL_MONExtension.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "hcm.fab.myprofile",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/HCMFAB_PRFL_MON"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.hcm.fab.myprofile.Component.extend("hcm.fab.myprofile.HCMFAB_PRFL_MONExtension.Component", {
	metadata: {
		manifest: "json"
	}
});