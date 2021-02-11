import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

class MusicList extends Component {
    render() {
        return(
            <div>
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
                </Table>
            </div>
        )
    }

}

export default MusicList;