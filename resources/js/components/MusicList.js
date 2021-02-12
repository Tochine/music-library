import React, { Component } from 'react';
import { Icon, Label, Menu, Table, TableCell } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class MusicList extends Component {
    constructor() {
        super();
        this.state = {
            musicList: []
        }
    }


    fetchMusics = async () => {
        const response = await axios.get('api/music')
        //console.log()

        // if(response.data.status === true){
        //     this.setState({musicList: response});
        // }
        console.log(response);
    }

    componentDidMount(){
        //this.fetchMusics()
        //Call api and update Music
        axios.get('api/music').then(res => {
            this.setState({
                musicList: res.data
            })
        }) 
        //console.log(musicList)
    }


    render() {

        const { musicList } = this.state
        

        return(
            <div>
                <h1>Musics</h1>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Muisic ID</Table.HeaderCell>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Artist</Table.HeaderCell>
                            <Table.HeaderCell>Genre</Table.HeaderCell>
                            <Table.HeaderCell>Album</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                        <Table.Body>
                            {musicList.map(music => (
                                <Table.Row key={music.id}>
                                    <Table.Cell>{music.music_id}</Table.Cell>
                                    <Table.Cell>{music.title}</Table.Cell>
                                    <Table.Cell>{music.artist}</Table.Cell>
                                    <Table.Cell>{music.genre}</Table.Cell>
                                    <Table.Cell>{music.album}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                </Table>
            </div>
        )
    }

}

export default MusicList;