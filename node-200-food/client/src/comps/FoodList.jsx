const FoodList = ({ foodList }) => {
  const foodBody = foodList.map((food) => {
    return (
      <table width="100%">
        <tr>
          <td width="20%">{food.f_date}</td>
          <td width="20%">{food.f_food}</td>
          <td width="20%">{food.f_eat}</td>
          <td width="20%">{food.f_cal}</td>
          <td width="20%">{food.f_scal}</td>
        </tr>
      </table>
    );
  });

  return (
    <table className="w3-table w3-table-all">
      <tbody>{foodBody}</tbody>
    </table>
  );
};

export default FoodList;
