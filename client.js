// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {
    const r360 = new ReactInstance(bundle, parent, {
        // Add custom options here
        fullScreen: true,
        ...options
    });

    const myCylinderSurface = new Surface(
        4680,
        600,
        Surface.SurfaceShape.Cylinder
    );

    const myFlatSurface0 = new Surface(600, 400, Surface.SurfaceShape.Flat);
    myFlatSurface0.setAngle(-Math.PI /1.3, 0);

    const myFlatSurface1 = new Surface(600, 400, Surface.SurfaceShape.Flat);
    myFlatSurface1.setAngle(-Math.PI / 3.8, 0);

    const myFlatSurface2 = new Surface(600, 400, Surface.SurfaceShape.Flat);
    myFlatSurface2.setAngle(-Math.PI /-3.5, 0);

    const myFlatSurface3 = new Surface(600, 400, Surface.SurfaceShape.Flat);
    myFlatSurface3.setAngle(-Math.PI /-1.25, 0);

    // Render your app content to the default cylinder surface
    r360.renderToSurface(
        r360.createRoot('travelVR', {
            /* initial props */
        }),
        myCylinderSurface
    );

    r360.renderToSurface(
        r360.createRoot('Flag0', {
            image: './target.png'
        }),
        myFlatSurface0
    );
    r360.renderToSurface(
        r360.createRoot('Flag1', {
            image: './target.png'
        }),
        myFlatSurface1
    );
    r360.renderToSurface(
        r360.createRoot('Flag2', {
            image: './target.png'
        }),
        myFlatSurface2
    );
    r360.renderToSurface(
        r360.createRoot('Flag3', {
            image: './target.png'
        }),
        myFlatSurface3
    );


    // Load the initial environment
    r360.compositor.setBackground(r360.getAssetURL('gridvr.jpg'));
}

window.React360 = { init };