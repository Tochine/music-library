import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

class AddMusic extends Component {

    state = {
        music_id: '',
        title: '',
        artist: '',
        genre: '',
        album: ''
    }

    handleInput = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return(
            <div>
                <Form>
                    <Form.Field>
                        <label>Music ID</label>
                        <input placeholder='Music ID' value={this.state.music_id} onChange={this.handleInput} required  />
                    </Form.Field>
                    <Form.Field>
                        <label>Title</label>
                        <input placeholder='Title' value={this.state.title} onChange={this.handleInput} required />
                    </Form.Field>
                    <Form.Field>
                        <label>Artist</label>
                        <input placeholder='Artist' value={this.state.artist} onChange={this.handleInput} required />
                    </Form.Field>
                    <Form.Field>
                        <label>Genre</label>
                        <input placeholder='Genre' value={this.state.genre} onChange={this.handleInput} required  />
                    </Form.Field>
                    <Form.Field>
                        <label>Album</label>
                        <input placeholder='Album' value={this.state.album} onChange={this.handleInput} required  />
                    </Form.Field>
                    <Form.Field>
                        <input type="submit" className="ui button" value="Add" />
                    </Form.Field>
                </Form>
            </div>
        )
    }

}

export default AddMusic;