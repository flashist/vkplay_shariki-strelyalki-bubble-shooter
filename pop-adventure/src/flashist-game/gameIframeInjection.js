// Debug

// // Debugging site-lock location change
// window.navigation.addEventListener("navigate", (event) => {
//     console.log('location changed!');
//     alert('location changed!');
//     debugger;
// });

// // Debugging console
// const sourceConsoleLog = console.log;
// console.log = (...args) => {
//     sourceConsoleLog.call(console, ...args)
// }

// // Debugging LocalStorage
// const localStorageSetItemSource = localStorage.setItem;
// localStorage.setItem = (...args) => {
//     console.log("Flashist Adaptation __ localSTorage.setItem ___ ...args: ", ...args);
//     localStorageSetItemSource.call(localStorage, ...args);
// }

// Construct: helper tools for finding URLs of all missing files
var flashist_constructLoadAllFiles = () => {
    // Setting up debug config and variables
    window.flashist_saveAllLoadPathsList = [];
    window.flashist_saveAllNotLoadedPathsList = [];
    // window.flashistAdaptation_debugPreventAllLoads = true;
    window.flashistAdaptation_debugPreventAllLoads = false;
    //

    // var allAssetIds = [];
    // cc.resources.load("2d/ui/bubble/three fire_2");
    let idsCount = flashist_assetIdsCollection.length;
    console.log("Ids count: ", idsCount);
    for (let idIndex = 0; idIndex < idsCount; idIndex++) {
        let tempAssetData = flashist_assetIdsCollection[idIndex];
        let tempAssetId = tempAssetData[0];
        // console.log("pathIndex: ", pathIndex, " | tempPathUrl: ", tempPathUrl);

        cc.resources.load(tempAssetId);
    }

    //
    console.log("     ");
    console.log("ALL LOADING PATHS: START");
    console.log(JSON.stringify(window.flashist_saveAllLoadPathsList));
    console.log("ALL LOADING PATHS: END");
    console.log("     ");
    alert("ALL LOADING PATHS: END");
}

// Object.defineProperty(
//     window.location, 
//     'href', {
//     get() {
//       return "test";
//     },
  
//     set(value) {
//       alert("Flashist Adaptation __ href __ set __ value: ", value);
//     }
//   });
// const locationHandler = {
//     set(obj, prop, value) {
//         console.log("Flashist Adaptation __ href __ set __ prop: ", prop, " | value: ", value);
//         if (prop === 'href') {
//             alert("Flashist Adaptation __ href __ set __ value: " + value);
//         }

//         return Reflect.set(...arguments);
//     },

//     open: (...args) => {
//         alert("Flashist Adaptation __ open");
//     },
//     assign: (...args) => {
//         alert("Flashist Adaptation __ assign");
//     },
//     replace: (...args) => {
//         alert("Flashist Adaptation __ replace");
//     }
// };
// const windowLocationProxy = new Proxy(window.location, locationHandler);

// const documentHandler = {
//     set(obj, prop, value) {
//         console.log("Flashist Adaptation __ document __ set __ prop: ", prop, " | value: ", value);
//         if (prop === 'location') {
//             alert("Flashist Adaptation __ document.location __ set __ value: ", value);
//         }

//         return Reflect.set(...arguments);
//     }
// }
// const documentProxy = new Proxy(document, documentHandler);


// Yizhiyuan Network Technology Co., Ltd.
var idhb = {
    debug: (...args) => {
        console.log("Flashist Adaptation __ idhb.debug __ ...args: ", ...args);
    },

    getConfig: (...args) => {
        alert("Flashist Adaptation __ idhb.getConfig __ NOT IMPLEMENTED! __ ...args: ", ...args);
    },

    setAdserverTargeting: (...args) => {
        console.log("Flashist Adaptation __ idhb.setAdserverTargeting __ ...args: ", ...args);
    },

    allowPersonalizedAds: (...args) => {
        console.log("Flashist Adaptation __ idhb.allowPersonalizedAds ___ ...args: ", ...args);
    },

    addEventListener: (...args) => {
        console.log("Flashist Adaptation __ idhb.addEventListener ___ ...args: ", ...args);
    },

    requestAds: async (config, ...args) => {
        console.log("Flashist Adaptation __ idhb.requestAds ___ config: ", config, " | ...args: ", ...args);

        config.callback();
    },

    isLoaded: () => {
        console.log("Flashist Adaptation __ idhb.isLoaded");
        return true;
    },

    getAdserverTargetingForAdSlot: (...args) => {
        console.log("Flashist Adaptation __ idhb.getAdserverTargetingForAdSlot ___ ...args: ", ...args);
    }
}
//
var google = {
    ima: {
        AdsRequest: function AdsRequest (...args) {
            console.log("Flashist Adaptation __ google.ima.AdsRequest ___ ...args: ", ...args);
        }
    }
};
//
var regeneratorRuntime;

// RavalMatic
// // ADS: START
// var consent = {
//     ConsentStatus: {
//         Ready: "ready",
//         Required: "required",
//         Unknown: "unknown"
//     },

//     requestInfoUpdate: () => {
//         return Promise.resolve();
//     },

//     getConsentStatus: () => {
//         return Promise.resolve(consent.ConsentStatus.Ready);
//     }
// };
// //
// const adTypes = {
//     FULLSCREEN: "fullscreen",
//     REWARDED: "rewarded"
// };
// var admobCreateAdObject = (id, config) => {
//     var eventDispatcher = new EventTarget();
//     return {
//         eventDispatcher,
//         config,

//         on: (...args) => {
//             console.log("AdObject || on __ id: ", id, " | ...args: ", ...args);
//             eventDispatcher.addEventListener.call(eventDispatcher, ...args);
//         },

//         load: () => {
//             // TODO: implement something
//             console.log("AdObject || load __ id: ", id);
//             eventDispatcher.dispatchEvent(new Event('load'));
//         },

//         show: async () => {
//             // TODO: implement something
//             console.log("AdObject || show __ id: ", id);

//             if (id === adTypes.FULLSCREEN) {
//                 eventDispatcher.dispatchEvent(new Event('show'));
//                 await GameIframeCommunicationManager.waitApproveForNextLevel()
//                     .then(
//                         () =>{
//                             eventDispatcher.dispatchEvent(new Event('dismiss'));
//                         }
//                     );

//             } else if (id === adTypes.REWARDED) {
//                 await GameIframeCommunicationManager.waitApproveForRewarded()
//                     .then(
//                         (rewarded) =>{
//                             eventDispatcher.dispatchEvent(new Event('impression'));
//                             if (rewarded) {
//                                 eventDispatcher.dispatchEvent(new Event('reward'));
//                             }
//                             eventDispatcher.dispatchEvent(new Event('dismiss'));
//                         }
//                     );
//             }
//         }
//     }
// }
// var admob = {
//     InterstitialAd: function (config) {
//         return admobCreateAdObject(adTypes.FULLSCREEN, config);
//     },

//     RewardedAd: function (config) {
//         return admobCreateAdObject(adTypes.REWARDED, config);
//     }
// };
// // ADS: END

// // IAP: START
// var CdvPurchase = {
//     store: {
//         initialize: () => {
//             console.log("CdvPurchase || initialize");
//         },
        
//         ready: (callback, ...args) => {
//             console.log("CdvPurchase || ready __ callback: ", callback, " | ...args: ", ...args);
//             callback();
//         },

//         update: () => {
//             console.log("CdvPurchase || update");
//         },

//         restorePurchases: () => {
//             console.log("CdvPurchase || restorePurchases");
//         },

//         register: (...args) => {
//             console.log("CdvPurchase || register __ ...args: ", ...args);
//         },

//         when: () => {
//             return CdvPurchase.store;
//         },

//         approved: (callback, ...args) => {
//             console.log("CdvPurchase || approved __ callback: ", callback, " | ...args: ", ...args);
//             return CdvPurchase.store;
//         },
//         productUpdated: (callback, ...args) => {
//             console.log("CdvPurchase || approved __ callback: ", callback, " | ...args: ", ...args);
//             return CdvPurchase.store;
//         }
//     }
// };
// // IAP: END

// // GAME CENTER (?): START
// var game = {
//     _loggedin: false,

//     isLoggedIn: () => {
//         return game._loggedin;
//     },
//     setUp: () => {
// 		// TODO: do something
//     },
// 	login: (tag) => {
//         // TODO: do something
//         game._loggedin = true;
//     },

//     unlockAchievement: () => {
//         // TODO: do something
//     },

//     incrementAchievement(){
//         // TODO: do something
//     }
// }
// // GAME CENTER (?): END