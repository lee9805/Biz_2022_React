const FoodList = ({ foodList }) => {
  const foodBody = foodList.map((food) => {
    return (
      <tr>
        <td>{food.f_date}</td>
        <td>{food.f_food}</td>
        <td>{food.f_eat}</td>
        <td>{food.f_cal}</td>
        <td>{food.f_scal}</td>
      </tr>
    );
  });

  return (
    <table className="w3-table w3-table-all">
      <tbody>{foodBody}</tbody>
    </table>
  );
};

export default FoodList;
