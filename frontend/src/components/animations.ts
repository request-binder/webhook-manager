const duration = 500
const onEnter =  (node:HTMLElement) => {
        node.style.marginTop = `-${node.offsetHeight}px`;
        node.style.marginBottom = `0px`;
    }
const onEntering = (node:HTMLElement)=> {
        node.style.marginTop = "";
        node.style.marginBottom = "";
    }
const onExit = (node:HTMLElement) => {
        node.style.marginTop = "";
        node.style.marginBottom = "";
    }
const onExiting = (node:HTMLElement) => {
        node.style.marginTop = `-${node.offsetHeight}px`;
        node.style.marginBottom = `0px`;
    }

export {duration, onEnter, onEntering, onExit, onExiting}
