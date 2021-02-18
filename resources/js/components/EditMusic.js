import React, { Component } from 'react'
import axios from 'axios'
import { Form, Grid, Container, Header } from 'semantic-ui-react'

class EditMusic extends Component {
    state = {
        musicId: '',
        title: '',
        artist: '',
        genre: '',
        album: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateMusic = (e) => {
        e.defaultPrevent()

    }

    render() {
        return(
            <div>
                <Container>
                    <Grid centered columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Header padded={true}>Edit Music</Header>
                                <Form onSubmit={this.updateMusic}>
                                    <Form.Field>
                                        <label>Music ID</label>
                                        <input placeholder='Music ID' name="musicId" value={this.state.musicId} onChange={this.handleInputField} />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Title</label>
                                        <input placeholder='Title' name="title" value={this.state.title} onChange={this.handleInputField} />
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
                                        <input type="submit" className="ui button" value="Update" />
                                    </Form.Field>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>  
                    </Grid>
                    
                </Container>
            </div>
        )
    }
}

export default EditMusic