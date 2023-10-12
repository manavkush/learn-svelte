export const getRandomNumber = async (): Promise<{ok: boolean, number: number}> => {
    // Fetch a random number between 0 and 100
    // (with a delay, so that we can see it)
    // const res = await fetch('/random-number');

    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random()*100+1);
            const response = {ok: true, number: randomNumber};
            resolve(response)
        }, 3000) 
    })
}
