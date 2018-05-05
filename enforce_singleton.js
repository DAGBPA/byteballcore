/*jslint node: true */
"use strict";

if (global._bDAGPizzaDoughLoaded)
	throw Error("Looks like you are loading multiple copies of dag-pizza-dough, which is not supported.\nRunnung 'npm dedupe' might help.");

global._bDAGPizzaDoughLoaded = true;
