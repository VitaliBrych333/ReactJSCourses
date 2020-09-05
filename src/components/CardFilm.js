import React, { Component } from 'react';
import { Badge, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { fetchMoviesByGenre, fetchMovieId } from '../redux/actions/moviesActions';
import { showEditPage, showDeletePage } from '../redux/actions/windowActions';
import ModalWindow from './shared/ModalWindow';

const StyledCartTitle = styled(Card.Title)`
    display: flex;
    justify-content: space-between;

    a {
        color: #212;
    }
`;

const StyledCard = styled(Card)`
    width: 230px;
    border: none;
    display: flex;
    flex-direction: column;
    margin-right: 10px;

    .card-body {
        padding-bottom: 10px;
        padding-top: 10px;
    }

    .card-text button {
        background: none;
        border: none;
        color: #212529;
        padding: 0;
    }

    img {
        width: 230px;
        height: 300px;
        margin-top: -10px;
    }

    img:hover {
        cursor: pointer;
    }

    .card-text, .card-text p {
        margin: 0;
        padding: 0;
        font-size: 14px;
    }

    span {
        height: 24px;
    }

    button {
        margin-right: 3px;
    }

    button:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    .show {
        display: block;
        border-radius: 50%;
        background-color: gray;
        position: absolute;
        z-index: 2;
        margin: 5px 5px 0 197px;
    }

    svg: hover {
        cursor: pointer;
    }

    .no-show {
        display: none;
    }
`;

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dotsIsVisible: "no-show",
            showModalWindow: false,
        };

        this.showDots = this.showDots.bind(this);
        this.hideDots = this.hideDots.bind(this);

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

        this.handleClickTag = this.handleClickTag.bind(this);
    }

    handleClick(e) {
        this.props.dispatch(
            fetchMoviesByGenre(this.props.sort, e.target.value));
    }

    handleRequests(e, array) {
        this.props.dispatch(
            fetchMovieId(this.props.info.id));

        if (array.length) {
            this.props.dispatch(
              fetchMoviesByGenre(this.props.sort, array));
        }
    }

    showDots() {
        this.setState({ dotsIsVisible: "show" });
    }

    hideDots() {
        this.setState({ dotsIsVisible: "no-show" });
    }

    showModal() {
        this.hideDots();
        this.setState({ showModalWindow: true });
    }

    hideModal() {
        this.setState({ showModalWindow: false });
    }

    handleClickTag(e) {
        this.hideDots();
        this.hideModal();

        switch (e.target.innerHTML) {
            case 'Edit':
                this.props.dispatch(showEditPage(true));
                break;
            case 'Delete':
                this.props.dispatch(showDeletePage(true));
                break;
            default:
                break;
         }
    }

    render() {
        return (
            <StyledCard>
                <MoreVertIcon className={this.state.dotsIsVisible}
                               onMouseEnter={this.showDots}
                               onClick={this.showModal} />

                <ModalWindow show={this.state.showModalWindow} handleClose={this.hideModal} onMouseOut={this.hideModal}>
                    <p onClick={this.handleClickTag}>Edit</p>
                    <p onClick={this.handleClickTag}>Delete</p>
                </ModalWindow>

                <Card.Img variant="top"
                          src={this.props.info.poster_path}
                          onMouseEnter={this.showDots}
                          onMouseLeave={this.hideDots} />

                <Card.Body>
                    <StyledCartTitle>
                        <Link to={{pathname: `/movies/${this.props.info.id}`}}
                              onClick={e => this.handleRequests(e, this.props.info.genres)}>
                            {this.props.info.title}
                        </Link>
                        <Badge variant="secondary">{this.props.info.release_date.trim().slice(0, 4)}</Badge>
                    </StyledCartTitle>
                    <Card.Text>
                        {this.props.info.genres.map((item, index) => <button onClick={e => this.handleClick(e, 'value')}
                                                                             value={item}
                                                                             href='#'
                                                                             key={index}
                                                                             info={item}
                                                                             variant="secondary">{item}
                                                                     </button>
                                                    )}
                    </Card.Text>
                </Card.Body>
            </StyledCard>
        );
    };
};

Item.propTypes = {
    sort: PropTypes.string,
    info: PropTypes.shape({
        id : PropTypes.number,
        title: PropTypes.string,
        genres: PropTypes.array,
        release_date: PropTypes.string
    })
};

const mapStateToProps = state => ({
    data: state.movieReducer.movies.data,
    sort: state.criteriaReducer.sort,
    showEditPage: state.windowReducer.showEditPage
});

export default connect(mapStateToProps)(Item);
