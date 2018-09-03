<!-- <template>
<div>

  <el-row :gutter="20">
  <h1 id="header"><b>Purchase Require</b></h1>
</el-row>


  <div class="border">
  <el-row :gutter="20">
    <el-col :span="20"  :offset="2">
      <div class="grid-content bg-purple">
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="1">
        <label id="label">Filter</label>
        </el-col>
        </el-row>

        <el-form :inline="true" >
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :md='12' :span="12">
              <div class="grid-content bg-purple" id='form-input'>
                  <el-input v-model="Filter.type" placeholder="ประเภท"></el-input>
              </div>
            </el-col>
            <el-col :md='12' :span="12">
              <div class="grid-content bg-purple-light" id="form-input">
                  <el-input v-model="Filter.project" placeholder="Project"></el-input>
              </div>
            </el-col>
            <el-col :md='12' :span="12">
              <div class="grid-content bg-purple-light" id="form-input">
                  <el-input v-model="Filter.status" placeholder="สถานะ"></el-input>
              </div>
            </el-col>
          </el-row><br>

          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :md='12' :lg='2' :span="6">
              <div class="form-input">
                <el-date-picker
                  v-model="date.value9"
                  type="daterange"
                  align="right"
                  start-placeholder="Start Date"
                  end-placeholder="End Date"
                  default-value='2018-08'>
                </el-date-picker>
              </div>
            </el-col>

            <el-col :md='2' :lg='2' :span="6">
                  <el-button size="small" @click='onSubmit' type="primary">ค้นหา</el-button>
            </el-col>
          </el-row>

        </el-form>
      </div>
    </el-col>
  </el-row>
</div><br>

<div>
  <el-button style="float: right;" size="medium"  @click='createPR' type="success">+สร้างใบขออนุมัติสั่งซื้อ</el-button>
  <el-table
    :data="tableData"
    :default-sort = "{prop: 'date', order: 'descending'}"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      :formatter="formatter">
    </el-table-column>
  </el-table>
</div>

</div>
</template>

 <script>
 export default {
   name: 'HelloWorld',
   props: {
     msg: String
   }
 }
 </script>

<script>
export default {
  data() {
    return {
      Filter: {
        type:'',
        project: '',
        status: ''
      },
      date: {
        value9: ''
      },
      tableData: [{
           date: '2016-05-03',
           name: 'Tom',
           address: 'No. 189, Grove St, Los Angeles'
         }, {
           date: '2016-05-02',
           name: 'Tom',
           address: 'No. 189, Grove St, Los Angeles'
         }, {
           date: '2016-05-04',
           name: 'Tom',
           address: 'No. 189, Grove St, Los Angeles'
         }, {
           date: '2016-05-01',
           name: 'Tom',
           address: 'No. 189, Grove St, Los Angeles'
         }]
    }

  },
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log(this.Filter.type);
      console.log(this.Filter.project);
      console.log(this.Filter.status);
      console.log(this.date.value9[0]);
      console.log(this.date.value9[1]);
    },
    createPR() {
      console.log("123456");
    },
    formatter(row, column) {
        return row.address;
    }
  }
}
</script>




<style>
  #label{
    float:left;
    padding-left: 17%;
    font-weight: lighter;
    padding-bottom: 10px;
  }
  #header{
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
    float: left;
  }
  .border {
    padding-top: 20px;
    padding-bottom: 20px;
    border: 1px solid gray;
    border-radius: 20px;
  }
  #form-input{
    margin-right: 10px;
    width: 350px auto;
  }


</style> -->


<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- /* <style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style> */ -->
