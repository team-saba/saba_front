export default function Table() {
  return (
    <div className="tableElement">
      <table class="table table-striped table-bordered text-center align-middle">
        <thead>
          <tr>
            <th scope="col">
              {/* <input
                          class="form-check-input"
                          type="checkbox"
                          id="chk_all"
                          name="chk_all"
                        />{" "} */}
            </th>
            <th scope="col" colspan="2">
              name
            </th>
            <th scope="col" colspan="2">
              verified
            </th>
            <th scope="col" colspan="2">
              state
            </th>
            <th scope="col" colspan="2">
              image
            </th>
            <th scope="col" colspan="2">
              command
            </th>
          </tr>
        </thead>
        <tbody id="result_data"></tbody>
      </table>
    </div>
  );
}
