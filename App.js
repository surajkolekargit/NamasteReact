 
 const parent = React.createElement(
    'div', 
    {id: 'parent'}, 
    React.createElement(
        'div', 
        {id: 'child1'}, 
        [
            React.createElement('h1', {id: 'head1'}, 'My Nested Heading 1'),
            React.createElement('h2', {}, 'My Nested Heading 2')
        ]
        
    )
    );
        



        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(parent);