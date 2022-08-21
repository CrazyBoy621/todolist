const express = require('express');
const bodyParser = require('body-parser');




app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var today = new Date()

    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    var day = today.toLocaleDateString('en-US', options)


    var currentDay = today.getDay();
    // switch (currentDay) {
    //     case 0:
    //         var day = 'Sunday';
    //         break;
    //     case 1:
    //         var day = 'Monday';
    //         break;
    //     case 2:
    //         var day = 'Tuesday';
    //         break;
    //     case 3:
    //         var day = 'Wednesday';
    //         break;
    //     case 4:
    //         var day = 'Thursday';
    //         break;
    //     case 5:
    //         var day = 'Friday';
    //         break;
    //     case 6:
    //         var day = 'Saturday';
    //         break;
    //     default:
    //         console.log('Error');
    // }
    res.render('list', {
        listTitle: day,
        newListItems: items
    });
}
);

app.post('/', (req, res) => {
    var item = req.body.newItem;
    if(req.body.list === 'Work'){
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }



    // 

    // items.push(item);

    // res.redirect('/');
}
);

app.get('/work', (req, res) => {
    res.render('list', {
        listTitle: 'Work List',
        newListItems: workItems,
    });
}
);

app.get('/about', (req, res) => {
    res.render('about')
}
);

app.get('/work', (req, res) => {   
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect('/work');
}
);

app.listen(procces.env.PORT || 3000, () => {
    console.log('Example app listening on port 3000!');
}
);