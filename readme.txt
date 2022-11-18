This is a non profit example of how to use Redux
by: Guilherme Gonçalves

created with yarn create vite

Hi, here i will explain how to read my annotations.
    in the files you will see that type of notes:

    /* #(number) - (library name) - (explanation) */
    or
    /* (explanation) */

    the number means where you need to start (the order), or atleast, where i started;
    the library name tells you from where im importing the function, file, const or etc;
    and the explanation is just a... explanation xD.

you will find the numbers (the order) on the following files:

    #1 - src/store/index.ts
    #2 - src/main.tsx
    #3 - src/store/countes.ts
    #4 - src/app.tsx

on the #1 file: you will create and configure the store.
on the #2 file: you will provide the store to the application.
on the #3 file: you will create a slice (a reducer, a function that manage the initial state and the actions), and you can create more than one slice.
on the #4 file: you will use the states and the actions that you need to run your funcionality.

and it's simple as that.

notes:
english is not my mother tongue;
typescript is optional.

                                                        SUPER IMPORTANT!!! GET AWARE OF THE VERSIONS!!!

"dependencies": {
    "@reduxjs/toolkit": "^1.8.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.2"
},
"devDependencies": {
    "@types/react": "^18.0.17",
    "@types/react-dom": "^18.0.6",
    "@vitejs/plugin-react": "^2.1.0",
    "typescript": "^4.6.4",
    "vite": "^3.1.0"
}
