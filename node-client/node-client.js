const celery = require('celery-node');


async function main() {
    const client = celery.createClient("redis://", "redis://");
    
    const task = client.createTask("tasks.do_heavy_task");
    const result = task.applyAsync(["Hi!! My name is bhargav. How are you?",3]);
    const data = await result.get();
    console.log(data)
    client.disconnect();
}
main().catch(err=>console.log(err))


// Run using :  $ node node-client.js
