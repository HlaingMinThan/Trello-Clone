import List from '../components/List.jsx';

export default function Home() {
  let lists = [
    {
      name: 'Backlog',
      tasks: [
        {
          title: 'Feature 1'
        },
        {
          title: 'Feature 2'
        },
      ]
    },
    {
      name: 'Working On',
      tasks: [
        {
          title: 'Feature 1'
        },
        {
          title: 'Feature 2'
        },
        {
          title: 'Feature 3'
        },
      ]
    }
  ];
  return (
    <div className="flex px-4 pb-8 items-start overflow-x-scroll">
      {lists.map(list => <List list={list} />)}
    </div>
  );
}
