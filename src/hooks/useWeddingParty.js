import { useState, useEffect } from 'react'
import usePartyPhotos from './usePartyPhotos'

const useWeddingParty = ref => {
  const membersPhotos = usePartyPhotos()
  const [membersArray, setMembersArray] = useState([])

  const orderedInfo = [
    {
      name: 'Mike',
      id: 'mike',
      bio: 'Will revise after best man speech',
      image: membersPhotos.mike.childImageSharp.fluid,
      sillyImage: membersPhotos.sillymike.childImageSharp.fluid
    },
    {
      name: 'Emily',
      id: 'emily',
      bio: 'To persuade the Bride to turn up',
      image: membersPhotos.emily.childImageSharp.fluid,
      sillyImage: membersPhotos.sillyemily.childImageSharp.fluid
    }
  ]

  const randomInfo = [
    {
      name: 'Dave',
      id: 'dave',
      bio: 'Had to return the favour',
      image: membersPhotos.dave.childImageSharp.fluid,
      sillyImage: membersPhotos.sillydave.childImageSharp.fluid
    },
    {
      name: 'Nick',
      id: 'nick',
      bio: 'Lock up your daughters',
      image: membersPhotos.nick.childImageSharp.fluid,
      sillyImage: membersPhotos.sillynick.childImageSharp.fluid
    },
    {
      name: 'Oli',
      id: 'oli',
      bio: 'The Grandad',
      image: membersPhotos.oli.childImageSharp.fluid,
      sillyImage: membersPhotos.sillyoli.childImageSharp.fluid
    },
    {
      name: 'Andy',
      id: 'andy',
      bio: 'Still not out of child size clothes',
      image: membersPhotos.andy.childImageSharp.fluid,
      sillyImage: membersPhotos.sillyandy.childImageSharp.fluid
    },
    {
      name: 'Scott',
      id: 'scott',
      bio: 'Takes an hour to tell a 5 minute story',
      image: membersPhotos.scott.childImageSharp.fluid,
      sillyImage: membersPhotos.sillyscott.childImageSharp.fluid
    },
    {
      name: 'Becky',
      id: 'becky',
      bio: 'Has not lost an argument since 1993',
      image: membersPhotos.becky.childImageSharp.fluid,
      sillyImage: membersPhotos.sillybecky.childImageSharp.fluid
    },
    {
      name: 'Ellie',
      id: 'ellie',
      bio: 'Probably at (or in) a Musical',
      image: membersPhotos.ellie.childImageSharp.fluid,
      sillyImage: membersPhotos.sillyellie.childImageSharp.fluid
    },
    {
      name: 'Emma',
      id: 'emma',
      bio: 'Something about emma',
      image: membersPhotos.emma.childImageSharp.fluid,
      sillyImage: membersPhotos.sillyemma.childImageSharp.fluid
    },
    {
      name: 'Lucy',
      id: 'lucy',
      bio: 'Will probably be late',
      image: membersPhotos.lucy.childImageSharp.fluid,
      sillyImage: membersPhotos.sillylucy.childImageSharp.fluid
    },
    {
      name: 'Mandy',
      id: 'mandy',
      bio: "Just don't start her laughing",
      image: membersPhotos.mandy.childImageSharp.fluid,
      sillyImage: membersPhotos.sillymandy.childImageSharp.fluid
    }
  ]

  useEffect(() => {
    setMembersArray([...orderedInfo, ...shuffle(randomInfo)])
  }, [ref])

  return membersArray
}

const shuffle = arr => {
  const newArr = arr.slice()
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1))
    ;[newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
  }
  return newArr
}

export default useWeddingParty
