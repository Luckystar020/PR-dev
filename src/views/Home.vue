<template>
  <div>

    <el-row :gutter="20">
    <h1 id="header"><b>Purchase Request</b></h1>
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
      <router-link to="/PR" style="text-decoration: none; color:white; important!">
        <el-button style="float: right; margin-bottom: 5px;" size="medium"  @click='createPR' type="success">
        +สร้างใบขออนุมัติสั่งซื้อ
      </el-button>
      </router-link>
    <el-table
      :fit="true"
      :data="tableData"
      style="width: 100%;">
      <el-table-column
        prop="pr_no"
        label="#PR">
      </el-table-column>
      <el-table-column
        prop="pr_name"
        label="PR Name">
      </el-table-column>
      <el-table-column
        prop="date"
        label="วันที่"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="requestBy"
        label="Request By">
      </el-table-column>
      <el-table-column
        prop="status"
        label="Status">
      </el-table-column>
      <el-table-column
        label="Operations">
        <template slot-scope="scope">
          <!-- <el-button
            size="mini"
            @click="handleEdit()">
            <router-link to="/PR" size="mini" class="el-icon-edit-outline" style="text-decoration: none;"></router-link>
          </el-button> -->
          <router-link to="/editPR" style="text-decoration: none;" >
          <el-button
          class="el-icon-edit-outline"
          size="mini"
          @click="handleEdit()">
          </el-button>
        </router-link>&nbsp;

          <el-button
            size="mini"
            icon="el-icon-delete"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"></el-button>
        </template>
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
       pr_no: "PR00001",
       pr_name: "Ram DDR3",
       date: "08-08-2018",
       requestBy: "Nui",
       status: "Draft"
     }, {
       pr_no: "PR00002",
       pr_name: "Mainboard",
       date: "09-08-2018",
       requestBy: "Nui",
       status: "Waiting Approval"
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
     console.log("Goto Create");
   },
   formatter(row, column) {
       return row.address;
   },
   handleEdit(){

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



</style>
