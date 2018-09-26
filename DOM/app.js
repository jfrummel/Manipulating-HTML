document.addEventListener('DOMContentLoaded', function () {
    let btn = document.createElement("button");
    let btnText = document.createTextNode("Click Me");
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    btn.addEventListener("click", function () {
        alert('Thanks for clicking!');
    });

    let btn2 = document.getElementById("btnText");
    btn2.addEventListener("click", function () {
        let text = document.getElementById("text").value;
        alert(text);
    });

    let div1 = document.getElementById('div1');
    div1.addEventListener('mouseover', function () {
        div1.classList.add('div');
    });
    div1.addEventListener('mouseout', function () {
        div1.classList.remove('div');
    });

    let p = document.getElementById('p1');
    p.addEventListener('click', function () {
        let ranColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
        p.style.color = ranColor;
    });

    let spanBtn = document.getElementById('spnBtn');
    let div2 = document.getElementById('div2');
    spanBtn.addEventListener('click', function() {
        let span = document.createElement('span');
        let spanText = document.createTextNode('Jeremy');
        span.appendChild(spanText);
        div2.appendChild(span);
        document.body.appendChild(div2);
    });

    let btnFriends = document.getElementById('friends');
    let friendsList = document.getElementById('friendsList');
    btnFriends.addEventListener('click', function() {
        let friends = ['Bill', 'Bob', 'Mike', 'Andy', 'Joe', 'Trajan', 'Brian', 'Matt', 'AJ', 'Eric'];
        for (let i = 0; i < friends.length; i++) {
            let li = document.createElement('li');
            let friend = document.createTextNode(friends[i]);
            li.appendChild(friend);
            friendsList.appendChild(li);
            
        }
        });
        
});