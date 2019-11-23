import usePartyPhotos from './usePartyPhotos'

const useWeddingParty = () => {
  const members = usePartyPhotos()

  return [
    {
      name: 'Mike',
      id: 'mike',
      bio: 'Something about mike',
      image: members['mike'].childImageSharp.fluid,
      sillyImage: members['sillymike'].childImageSharp.fluid
    },
    {
      name: 'Dave',
      id: 'dave',
      bio: 'Something about dave',
      image: members['dave'].childImageSharp.fluid,
      sillyImage: members['sillydave'].childImageSharp.fluid
    },
    {
      name: 'Nick',
      id: 'nick',
      bio: 'Something about nick',
      image: members['nick'].childImageSharp.fluid,
      sillyImage: members['sillynick'].childImageSharp.fluid
    },
    {
      name: 'Oli',
      id: 'oli',
      bio: 'Something about oli',
      image: members['oli'].childImageSharp.fluid,
      sillyImage: members['sillyoli'].childImageSharp.fluid
    },
    {
      name: 'Andy',
      id: 'andy',
      bio: 'Something about andy',
      image: members['andy'].childImageSharp.fluid,
      sillyImage: members['sillyandy'].childImageSharp.fluid
    },
    {
      name: 'Scott',
      id: 'scott',
      bio: 'Something about scott',
      image: members['scott'].childImageSharp.fluid,
      sillyImage: members['sillyscott'].childImageSharp.fluid
    },
    {
      name: 'Emily',
      id: 'emily',
      bio: 'Something about emily',
      image: members['emily'].childImageSharp.fluid,
      sillyImage: members['sillyemily'].childImageSharp.fluid
    },
    {
      name: 'Becky',
      id: 'becky',
      bio: 'Something about becky',
      image: members['becky'].childImageSharp.fluid,
      sillyImage: members['sillybecky'].childImageSharp.fluid
    },
    {
      name: 'Ellie',
      id: 'ellie',
      bio: 'Something about ellie',
      image: members['ellie'].childImageSharp.fluid,
      sillyImage: members['sillyellie'].childImageSharp.fluid
    },
    {
      name: 'Emma',
      id: 'emma',
      bio: 'Something about emma',
      image: members['emma'].childImageSharp.fluid,
      sillyImage: members['sillyemma'].childImageSharp.fluid
    },
    {
      name: 'Lucy',
      id: 'lucy',
      bio: 'Something about lucy',
      image: members['lucy'].childImageSharp.fluid,
      sillyImage: members['sillylucy'].childImageSharp.fluid
    },
    {
      name: 'Mandy',
      id: 'mandy',
      bio: 'Something about mandy',
      image: members['mandy'].childImageSharp.fluid,
      sillyImage: members['sillymandy'].childImageSharp.fluid
    }
  ]
}

export default useWeddingParty
