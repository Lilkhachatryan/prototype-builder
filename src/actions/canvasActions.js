import * as actionTypes from './actionTypes';
import {loadCanvasesService, postCanvasService, updateCanvasService} from "../services/client";

export const updateElement = (canvas, obj) => {
    const newCurrentElement = canvas.getActiveObject();

    if (obj.src) {
        // newCurrentElement.setSrc('');
        newCurrentElement.setSrc(obj.src, () => {
            // canvas.discardActiveObject();
            // canvas.setActiveObject(newCurrentElement);
        });
    } else if (obj.shadow) {
        newCurrentElement.setShadow({ ...obj.shadow });
    } else {
        newCurrentElement.set({ ...obj });
    }
    canvas.renderAll();

    return {
        type: actionTypes.UPDATE_OBJECT,
        payload: newCurrentElement.toObject()
    };
};

export const updateGroupElement = (canvas, obj) => {
    const newCurrentElement = canvas.getActiveObject();
    if (obj.fill) {
        newCurrentElement.fillName = obj.fill;
        newCurrentElement.forEachObject(el => el.set({ ...obj }));
    }
    if (obj.colors) {
        newCurrentElement.colors = obj.colors;
        newCurrentElement.forEachObject(el => el.set({ ...obj }));
    }

    canvas.renderAll();
    console.log(newCurrentElement.toObject(['colors', 'fillName', 'vertical', 'aaaaaaaa']));
    return {
        type: actionTypes.UPDATE_GROUP_OBJECT,
        payload: newCurrentElement.toObject(['colors', 'fillName', 'vertical'])
    };
};

export const updateCurrentObject = (obj) => {
    return {
        type: actionTypes.UPDATE_CURRENT_OBJECT,
        payload: obj
    };
};

export const deleteObject = (canvas, obj) => {
    // const activeObj = canvas.getObjects().find(el => el.id === obj.id);
    const activeObj = canvas.getActiveObject();
    if(!activeObj.getObjects) {
        canvas.remove(activeObj);
    } else {
        canvas.remove(activeObj);
        activeObj.forEachObject(el => canvas.remove(el));
        canvas.discardActiveObject();
    }

    return {
        type: actionTypes.DELETE_OBJECT,
        payload: {}
    };
};

export const updatePanningPosition = (data) => {
    return {
        type: actionTypes.UPDATE_PANNING_POSITION,
        payload: data
    };
};



// Load canvases


export function loadCanvases() {
    return {
        type: actionTypes.LOAD_CANVASES
    };
}

export function loadCanvasesSuccess(payload) {
    return {
        type: actionTypes.LOAD_CANVASES_SUCCESS,
        payload
    };
}

export function handleLoadCanvases() {
    return (dispatch) => {
        dispatch(loadCanvases());
        return loadCanvasesService().then( (response) => {
            console.log(response, 'RESPONSE');
            dispatch(loadCanvasesSuccess(response.data));
        } );
    };
}

// post canvas

export function postCanvasSuccess(payload) {
    return {
        type: actionTypes.POST_CANVAS_SUCCESS,
        payload
    };
}


export function handlePostCanvas(canvas, cb) {
    return (dispatch) => {
        return postCanvasService(canvas).then( res => {
            dispatch(postCanvasSuccess(res.data));
            cb();
        } );
    };
}



export function updateCanvasSuccess(payload) {
    return {
        type: actionTypes.UPDATE_CANVAS_SUCCESS,
        payload
    };
}

export function handleUpdateCanvas(id, canvas, cb) {
    return (dispatch) => {
        return updateCanvasService(id, canvas).then( (res) => {
            cb();
            dispatch(updateCanvasSuccess(res.data));
        } );
    };
}














