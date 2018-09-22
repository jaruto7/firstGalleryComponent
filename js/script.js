var GalleryItem = React.createClass( {
    propTypes: {
        image: React.PropTypes.object.isRequired,
    },
        render: function() {
        return (
            React.createElement( 'div', {},
                React.createElement( 'h2', {}, this.props.image.name ),
                React.createElement( 'img', { src: this.props.image.src } )
                )
            )
        },
});

var Movie = React.createClass( {
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
        render: function() {
        return (
            React.createElement( 'div', {},
        React.createElement( 'ul', { key: movie.id }, ),
                React.createElement( 'li',  {}, this.props.movie.name )
                )
            )    
        },
});

var MovieTitle = React.createClass( {
    propTypes: {
        title: React.PropTypes.object.isRequired,
    },
        render: function() {
            React.createElement( 'div', {},
        React.createElement( 'ul', {}, ),
                React.createElement( 'li', {}, this.props.title.name )
            )
        }
});

var MovieDescription = React.createClass( {
    propTypes: {
        desc: React.PropTypes.object.isRequired,
    },
        render: function() {
            React.createElement( 'div', {},
                React.createElement( 'ul', {}, ),
                React.createElement( 'li', {}, this.props.desc.name )
            )
        }
});

var MovieList = React.createClass( {
    propTypes: {
        list: React.PropTypes.object.isRequired,
    },
        render: function() {
            React.createElement( 'div', {},
        React.createElement( 'ul', {}, ),
                React.createElement( 'li', {}, this.props.list.name )
            )
        }
});

var image = {
    name: 'Kotek',
    src: './images/kotki-dlugowlose.jpg'
};

var element = React.createElement( GalleryItem, { image: image } )
    ReactDOM.render( element, document.getElementById( 'app' ) );

var element2 = React.createElement( Movie, { key: movie.id, movie: movie } )
    ReactDOM.render( element2, document.getElementById( 'app' ) );

var element3 = React.createElement( MovieTitle, { title: title } )
    ReactDOM.render( element3, document.getElementById( 'app' ) );

var element4 = React.createElement( MovieDescription, { desc: desc } )
    ReactDOM.render( element4, document.getElementById( 'app' ) );
    
var element5 = React.createElement( MovieList, { list: list } )
    ReactDOM.render( element5, document.getElementById( 'app' ) );    