import { SET_VARMATERIALS } from "../action/variablematerials"

export function variablematerials (state = {
    MainFabricPPY: 10,
    NumMainYds: 6,
    LiningFabricPPY: 5,
    NumLiningYds: 6,
    SpecialtyFabricPPY: 0,
    NumSpecYds: 0,
    CrystalPPPkg: 0,
    NumCrystalPkg: 0,
    LaceBeadRhineTrim: 0,
    NumLaceBeadRhineTrim: 0,
    LaceBeadRhineApp: 0,
    NumLaceBeadRhineApp: 0,
    ZipperButtonHook: 8,
    NumZipperButtonHook: 1,
    Horsehair: 20,
    NumHorsehair: 1,
    Thread: 3.00,
    NumThread: 1,
    Embellishment1: 0,
    NumEmbellishment1: 0,
    Embellishment2: 0,
    NumEmbellishment2: 0,
    Embellishment3: 0,
    NumEmbellishment3: 0,
    HangTag: 5.00,
    NumHangTag: 1
}, action) {
    switch(action.type) {
        case SET_VARMATERIALS:
            return action.object
        
        default:
            return state
    }
}
