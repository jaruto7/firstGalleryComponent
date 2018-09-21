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
                React.createElement( 'ul', { key: movie_id }, ),
                React.createElement( 'li',  {}, this.props.movie.name )
                )
            )    
        },
});

var image = {
    name: 'Kotek',
    src: './images/kotki-dlugowlose.jpg'
};

var movie = {
    id: 1,
    name: 'Test'
}

var element2 = React.createElement( Movie, { key: movie_id, movie: movie } )
    ReactDOM.render( element2, document.getElementById( 'app' ) );

var element = React.createElement( GalleryItem, { image: image } );
        ReactDOM.render( element, document.getElementById( 'app' ) );

