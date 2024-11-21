function Grades() {
  return (
    <div className="flex-fill">
      <select id="gradebook">
        <option value="None">None</option>
        <option selected value="Gradebook">Gradebook</option>
      </select>
      <button type="button">Import</button>
      <select id="export">
        <option value="None">None</option>
        <option selected value="Export">Export</option>
      </select>
      <button type="button">Configure</button>


      <h2>Student Names</h2>
      <form id="student-names">
        <label htmlFor="text-fields-names"></label>
        <input id="text-fields-names" placeholder="Search Students" /><br />
      </form>

      <h2>Assignment Names</h2>
      <form id="assignment-names">
        <label htmlFor="text-fields-assignment"></label>
        <input id="text-fields-assignment" placeholder="Search Assignments" /><br />
      </form>

      <button type="button">Apply Filters</button>



      <h2>Grades</h2>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>A1 Setup<br />
              Out of 100</th>
            <th>A2 HTML<br />
              Out of 100</th>
            <th>A3 CSS<br />
              Out of 100</th>
            <th>A4 BOOTSTRAP<br />
              Out of 100</th>
            <th>A5 JAVASCRIPT<br />
              Out of 100</th>
            <th>A6 REACT<br />
              Out of 100</th>
            <th>A7 REDUX<br />
              Out of 100</th>
            <th>A8 NODE<br />
              Out of 100</th>
            <th>A9 MONGO<br />
              Out of 100</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td><input type="number" value="100" /></td>
            <td>92</td>
            <td>76</td>
            <td>81</td>
            <td>90</td>
            <td>95</td>
            <td><input type="number" value="88" /></td>
            <td>79</td>
            <td>93</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td><input type="number" value="91" /></td>
            <td>85</td>
            <td>97</td>
            <td><input type="number" value="78" /></td>
            <td>89</td>
            <td>92</td>
            <td>83</td>
            <td>95</td>
            <td>87</td>
          </tr>
          <tr>
            <td>Michael Johnson</td>
            <td>78</td>
            <td>94</td>
            <td>87</td>
            <td>96</td>
            <td><input type="number" value="82" /></td>
            <td>89</td>
            <td>91</td>
            <td>83</td>
            <td>90</td>
          </tr>
          <tr>
            <td>Sarah Williams</td>
            <td>85</td>
            <td>91</td>
            <td>79</td>
            <td>88</td>
            <td>93</td>
            <td>86</td>
            <td>90</td>
            <td>92</td>
              <td><input type="number" value="84" /></td>
            </tr>
          <tr>
            <td>David Brown</td>
            <td>92</td>
            <td>83</td>
            <td><input type="number" value="95"/></td>
            <td>87</td>
            <td>84</td>
            <td>91</td>
            <td>89</td>
            <td>88</td>
            <td>96</td>
          </tr>
          <tr>
            <td>Emily Davis</td>
            <td>89</td>
            <td>88</td>
            <td>82</td>
            <td>93</td>
            <td>87</td>
            <td>96</td>
            <td>85</td>
            <td>91</td>
            <td>83</td>
          </tr>
          <tr>
            <td>Christopher Wilson</td>
            <td>86</td>
            <td>90</td>
            <td>88</td>
            <td>82</td>
            <td>95</td>
            <td>83</td>
            <td>94</td>
            <td>87</td>
            <td>89</td>
          </tr>
          <tr>
            <td>Amanda Taylor</td>
            <td>94</td>
            <td>86</td>
            <td>90</td>
            <td>89</td>
            <td>81</td>
            <td>88</td>
            <td>96</td>
            <td>85</td>
            <td>92</td>
          </tr>
          <tr>
            <td>Matthew Martinez</td>
            <td>83</td>
            <td>92</td>
            <td>86</td>
            <td>90</td>
            <td>88</td>
            <td>82</td>
            <td>95</td>
            <td>84</td>
            <td>91</td>
          </tr>
          <tr>
            <td>Olivia Anderson</td>
            <td>90</td>
            <td>87</td>
            <td>93</td>
            <td>85</td>
            <td>92</td>
            <td>84</td>
            <td>91</td>
            <td>86</td>
            <td>88</td>
          </tr>
          <tr>
            <td>William Thompson</td>
            <td>88</td>
            <td>89</td>
            <td>81</td>
            <td>94</td>
            <td>86</td>
            <td>90</td>
            <td>83</td>
            <td>93</td>
            <td>85</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Grades;
