export const SET_VARMATERIALS = 'SET_VARMATERIALS'

// set Variable Materials
export function actionSetVarMaterials(object) {
    return {
        type: SET_VARMATERIALS,
        object
    }
}