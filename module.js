export async function listen (txt) {
    await new Promise((res,_) => {
        setInterval(() => {
            try{
                if(typeof eval(txt) != "undefined") res(true);
            }catch{};
        })
    })
}