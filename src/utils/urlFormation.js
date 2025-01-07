export const routeURLFormation = (path) => {
    let urlPath = window.location.pathname;
    const splitPath = urlPath.split("/");
    let subPath = splitPath[1];
    // console.log(`/${subPath}/${path}`)
    return `/${subPath}/${path}`;
}