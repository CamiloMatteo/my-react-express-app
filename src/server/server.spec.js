import { addNewTask, updateTask } from './server';

(async function myFunction() {
    await addNewTask({
        name: "nombre1",
        id: "12346"
    });

    await updateTask({
        id: "12346",
        name: "nombre 2 -> edited!"
    });
})();