import React, { Component } from 'react';
import { Form, Grid, Container } from 'semantic-ui-react'
// import { Form, FormControl } from 'react-bootstrap'
import axios from 'axios'

class AddMusic extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         musicId: '',
    //         title: '',
    //         artist: '',
    //         genre: '',
    //         album: '' 
    //     }
    // }

    state = {
        musicId: '',
        title: '',
        artist: '',
        genre: '',
        album: ''
    }

    handleInputField = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

     createNewMusic = async (e) => {
        e.preventDefault();


        // const music = {
        //     musicId: this.state.musicId,
        //     title: this.state.title,
        //     artist: this.state.artist,
        //     genre: this.state.genre,
        //     album: this.state.album
        // }

        const response = await axios.post('/api/music/store', this.state);
        console.log(response);
    }

    render() {
        return(
            <div>
                <Container>
                    {/* <Grid> */}
                        <Form onSubmit={this.createNewMusic}>
                            <Form.Field>
                                <label>Music ID</label>
                                <input placeholder='Music ID' name="musicId" value={this.state.musicId} onChange={this.handleInputField} />
                            </Form.Field>
                            <Form.Field>
                                <label>Title</label>
                                <input placeholder='Title' name="title" value={this.title} onChange={this.handleInputField} />
                            </Form.Field>
                            <Form.Field>
                                <label>Artist</label>
                                <input placeholder='Artist' name="artist" value={this.state.artist} onChange={this.handleInputField} />
                            </Form.Field>
                            <Form.Field>
                                <label>Genre</label>
                                <input placeholder='Genre' name="genre" value={this.state.genre} onChange={this.handleInputField}  />
                            </Form.Field>
                            <Form.Field>
                                <label>Album</label>
                                <input placeholder='Album' name="album" value={this.state.album}  onChange={this.handleInputField}  />
                            </Form.Field>
                            <Form.Field>
                                <input type="submit" className="ui button" value="Add" />
                            </Form.Field>
                        </Form>  
                    {/* </Grid> */}
                    
                </Container>
            </div>
        )
    }

}

export default AddMusic;