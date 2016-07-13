/**
 * Created by fechow on 7/13/16.
 */


import  React, {Component} from 'react'
import { Button, Icon, Input } from 'stardust'


export  default class SurveySearchView extends Component {


  render()
  {

    return (
      <Input className='left icon action' icon='search' placeholder='input survey name...'>
        <Button className="teal " type='submit'>Search</Button>
      </Input>
    )


  }

}