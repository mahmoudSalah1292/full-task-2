
{
    let tag = document.querySelector('#h5-counter')
    let i = 0
    let set = setInterval(() => {
        if (i == 8000) clearInterval(set)
        tag.innerText = i
        i += 20
    }, 10);
}


let Tag2 = document.querySelector('#h5-counter2')

let x = 0

{
    let set2 = setInterval(() => {
        if (x == 810) clearInterval(set2)
        Tag2.innerText = x
        x += 10
    }, 50);
}




