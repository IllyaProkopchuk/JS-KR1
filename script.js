let getSel = x => document.querySelector(x);
let getSelAll = x => document.querySelectorAll(x);

getSel('.edit').onclick = function () {
    getSel('.hide2').style.display = 'none';
    getSel('.hideBox').style.display = 'block';
    let a = getSel('.box').innerHTML;
    getSel('.tArea').value = a;
}
getSel('.save').onclick = function () {
    getSel('.box').innerHTML = getSel('.tArea').value;
}
getSel('.style').onclick = function () {
    getSel('.hideBox').style.display = 'none';
    getSel('.hide2').style.display = 'block';
}
for (let i = 0; i < 5; i++) {
    document.querySelectorAll('.custom-control-input')[i].onclick = function () {
        if (this.checked) {
            getSel('.box').style.fontSize = document.querySelectorAll('.custom-control-input')[i].value + 'px';
        }
    }
}

let f1 = document.forms['f1'];

f1.mysel.onchange = function () {
    for (let i = 0; i < f1.mysel.options.length; i++) {
        if (f1.mysel.options[i].selected) {
            getSel('.box').style.fontFamily = f1.mysel.options[i].value;
        }
    }
}

getSel('.butColorText').onclick = function () {
    getSel('.textColor').classList.add('block');
    getSel('.backgroundColor').removeAttribute('id');
}

getSel('.butBackgroundColor').onclick = function () {
    getSel('.textColor').classList.remove('block');
    getSel('.backgroundColor').id = ('block');
    getSel('.textColor').classList.remove('none');
}
getSel('.a1').onclick = function () {
    getSel('.box').classList.add('a1');
    getSel('.box').classList.remove('a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9');
    getSel('.backgroundColor').removeAttribute('id');
}
getSel('.a2').onclick = function () {
    getSel('.box').classList.add('a2');
    getSel('.box').classList.remove('a1', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9');
    getSel('.backgroundColor').removeAttribute('id');
}
getSel('.a3').onclick = function () {
    getSel('.box').classList.add('a3');
    getSel('.box').classList.remove('a2', 'a1', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9');
    getSel('.backgroundColor').removeAttribute('id');
}
getSel('.a4').onclick = function () {
    getSel('.box').classList.add('a4');
    getSel('.box').classList.remove('a2', 'a3', 'a1', 'a5', 'a6', 'a7', 'a8', 'a9');
    getSel('.backgroundColor').removeAttribute('id');
}
getSel('.a5').onclick = function () {
    getSel('.box').classList.add('a5');
    getSel('.box').classList.remove('a2', 'a3', 'a4', 'a1', 'a6', 'a7', 'a8', 'a9');
}
getSel('.a6').onclick = function () {
    getSel('.box').classList.add('a6');
    getSel('.box').classList.remove('a2', 'a3', 'a4', 'a5', 'a1', 'a7', 'a8', 'a9');
    getSel('.backgroundColor').removeAttribute('id');
}
getSel('.a7').onclick = function () {
    getSel('.box').classList.add('a7');
    getSel('.box').classList.remove('a2', 'a3', 'a4', 'a5', 'a6', 'a1', 'a8', 'a9')
    getSel('.backgroundColor').removeAttribute('id');
}
getSel('.a8').onclick = function () {
    getSel('.box').classList.add('a8');
    getSel('.box').classList.remove('a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a1', 'a9')
    getSel('.backgroundColor').removeAttribute('id');
}
getSel('.a9').onclick = function () {
    getSel('.box').classList.add('a9');
    getSel('.box').classList.remove('a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a1')
    getSel('.backgroundColor').removeAttribute('id');
}
getSel('.i1').onclick = function () {
    getSel('.box').classList.add('i1');
    getSel('.box').classList.remove('i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9');
    getSel('.textColor').classList.remove('block');
}
getSel('.i2').onclick = function () {
    getSel('.box').classList.add('i2');
    getSel('.box').classList.remove('i1', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9');
    getSel('.textColor').classList.remove('block');
}
getSel('.i3').onclick = function () {
    getSel('.box').classList.add('i3');
    getSel('.box').classList.remove('i2', 'i1', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9');
    getSel('.textColor').classList.remove('block');
}
getSel('.i4').onclick = function () {
    getSel('.box').classList.add('i4');
    getSel('.box').classList.remove('i2', 'i3', 'i1', 'i5', 'i6', 'i7', 'i8', 'i9');
    getSel('.textColor').classList.remove('block');
}
getSel('.i5').onclick = function () {
    getSel('.box').classList.add('i5');
    getSel('.box').classList.remove('i2', 'i3', 'i4', 'i1', 'i6', 'i7', 'i8', 'i9');
    getSel('.textColor').classList.remove('block');
}
getSel('.i6').onclick = function () {
    getSel('.box').classList.add('i6');
    getSel('.box').classList.remove('i2', 'i3', 'i4', 'i5', 'i1', 'i7', 'i8', 'i9');
    getSel('.textColor').classList.remove('block');
}
getSel('.i5').onclick = function () {
    getSel('.box').classList.add('i5');
    getSel('.box').classList.remove('i2', 'i3', 'i4', 'i1', 'i6', 'i7', 'i8', 'i9');
    getSel('.textColor').classList.remove('block');
}
getSel('.i6').onclick = function () {
    getSel('.box').classList.add('i6');
    getSel('.box').classList.remove('i2', 'i3', 'i4', 'i1', 'i5', 'i7', 'i8', 'i9');
    getSel('.textColor').classList.remove('block');
}
getSel('.i7').onclick = function () {
    getSel('.box').classList.add('i7');
    getSel('.box').classList.remove('i2', 'i3', 'i4', 'i1', 'i5', 'i6', 'i8', 'i9');
    getSel('.textColor').classList.remove('block');
}
getSel('.i8').onclick = function () {
    getSel('.box').classList.add('i8');
    getSel('.box').classList.remove('i2', 'i3', 'i4', 'i1', 'i5', 'i7', 'i6', 'i9');
    getSel('.textColor').classList.remove('block');
}
getSel('.i9').onclick = function () {
    getSel('.box').classList.add('i9');
    getSel('.box').classList.remove('i2', 'i3', 'i4', 'i1', 'i5', 'i7', 'i6', 'i8');
    getSel('.textColor').classList.remove('block');
}


getSel('.bold').onclick = function () {
    if (getSel('.bold').checked) {
        getSel('.box').classList.add('bold');
    } else {
        getSel('.box').classList.remove('bold');
    }
}

getSel('.cursive').onclick = function () {
    if (getSel('.cursive').checked) {
        getSel('.box').classList.add('cursive');
    } else {
        getSel('.box').classList.remove('cursive');
    }
}
getSel('.add').onclick = function () {
    getSel('.container').classList.add('none');
    getSel('.createPart').classList.remove('none');
}

getSel('.cheker').onclick = function () {
    if (getSelAll('.rr')[0].checked) {
        getSel('.table').classList.remove('none');
        getSel('.list').classList.add('none');
    } else if (getSelAll('.rr')[1].checked) {
        getSel('.list').classList.remove('none');
        getSel('.table').classList.add('none');
    }
}

let countTR, countTD, widthTD, heightTD, borderWidth, borderStyle, borderColor;

let table = '';
getSel('.butTable').onclick = function () {
    countTR = getSel('.countTR').value;
    countTD = getSel('.countTD').value;
    widthTD = getSel('.widthTD').value;
    heightTD = getSel('.heightTD').value;
    borderWidth = getSel('.borderWidth').value;
    
    let style;

    table += '<table>';
    for (let i = 0; i < countTR; i++) {
        table += '<tr>';
        for (let j = 0; j < countTD; j++) {
            style = `width:${widthTD}px; height:${heightTD}px; border:${borderWidth}px ${f2.sel.value} ${f3.color.value}`;
            table += `<td style ="${style}">TD</td>`;
        }
        table += '</tr>';
    }
    table += '</table>'
    console.log(table);
    getSel('.tArea').value += table;
    getSel('.createPart').classList.add('none');
    getSel('.table').classList.add('none');
    getSel('.container').classList.remove('none');
}

let li;
let liCount, styleType;
getSel('.butList').onclick = function () {
    liCount = getSel('.liCount').value;
    let f4 = document.forms['f4'];
    li = '<ul type="' + f4.type.value + '">';
    for (let i = 0; i < liCount; i++) {
        li += `<li> Item ${i+1} </li>`;
    }
    li += '</ul>';
    console.log(li);
    getSel('.tArea').value += li;
    getSel('.createPart').classList.add('none');
    getSel('.list').classList.add('none');
    getSel('.container').classList.remove('none');
}