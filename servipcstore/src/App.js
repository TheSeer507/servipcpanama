import './categories.styles.scss';


const App = () => {

  const categories = [
    {
      id : 1,
      title: 'Accesorios',
      imageUrl: 'https://www.tg-computers.co.uk/wp-content/uploads/2018/10/COMPUTER-accessories.jpg'
      
    },
    {
      id : 2,
      title: 'Componentes',
      imageUrl: 'https://i.pinimg.com/originals/3d/a2/7a/3da27a2f49d0a9e209bdbf719de9f571.jpg'
      
    },
    {
      id : 3,
      title: 'Computadoras',

      
    },
    {
      id : 4,
      title: 'Monitores',
      
    },
    {
      id : 5,
      title: 'Consumibles',
      
    },
    {
      id : 6,
      title: 'Redes',
      
    },
    {
      id : 7,
      title: 'Software',
      
    },
    {
      id : 8,
      title: 'Servicios',
      
    },
  ]
  return (
    <div className="categories-container">
      {categories.map(({title, id, imageUrl}) =>(
        <div className="category-container">
          <div className='background-image' />
          <div className="category-body-container">
          <h2>{title}</h2>
          <p>Ver Mas</p>
        </div>
      </div>
      ))}
    </div>
  );
};
export default App;
