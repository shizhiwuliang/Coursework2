ReactDOM.render(
    <div>
        <h1>{1+1}</h1>
    </div>
    ,
    document.getElementById('example')
);

var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};
ReactDOM.render(
    <h1 style = {myStyle}>菜鸟教程</h1>,
    document.getElementById('example')
);