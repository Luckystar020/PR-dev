<template>
  <div>
    <el-row :gutter="20">
      <h1 id="header"><b>Edit / Purchase Request</b></h1>
    </el-row>

    <el-form ref="form" :model="form">
      <el-row :gutter="20">
          <el-form-item>
            <el-col :span="24" :md="12">
              <label class="head_inputform">เลือกสาขา</label>
              <el-input class="form_input"></el-input>
          </el-col>
          </el-form-item>
        </el-row>
        <el-row :gutter="20">
            <el-form-item>
              <el-col :span="24" :md="12">
                <label class="head_inputform">ประเภท Request</label>
                <el-select class="form_input"  placeholder="please select your zone">
                  <el-option label="Zone one" value="shanghai"></el-option>
                  <el-option label="Zone two" value="beijing"></el-option>
              </el-select>
            </el-col>
            </el-form-item>
          </el-row>
          <el-row :gutter="20">
              <el-form-item>
                <el-col :span="24" :md="24">
                  <label class="head_inputform">Projectname</label>
                  <el-select class="form_input"  placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai"></el-option>
                    <el-option label="Zone two" value="beijing"></el-option>
                </el-select>
              </el-col>
              </el-form-item>
            </el-row><br>
            <el-row :gutter="20">
                <el-form-item>
                  <el-col :span="24" :md='24'>
                    <el-button size="medium" @click="dialogVisible = true" style="float:right; margin-bottom: 5px;" type="primary">+ เพิ่มสินค้า</el-button>
                    <el-table
                      :data="tableData2"
                      style="width: 100%;">
                      <el-table-column
                        type="index"
                        :index="indexMethod">
                      </el-table-column>
                      <el-table-column
                        prop="product"
                        label="สินค้า">
                      </el-table-column>
                      <el-table-column
                        prop="amount"
                        label="จำนวน">
                      </el-table-column>
                      <el-table-column
                        prop="unit"
                        label="หน่วย"
                        :formatter="formatter">
                      </el-table-column>
                      <el-table-column
                        prop="perunit"
                        label="ราคาต่อหน่วย"
                        :formatter="formatter">
                      </el-table-column>
                      <el-table-column
                        prop="date"
                        label="วันที่ต้องการ"
                        :formatter="formatter">
                      </el-table-column>
                      <el-table-column
                        label="Operations">
                        <template slot-scope="scope">
                          <el-button
                            size="mini"
                            icon="el-icon-delete"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)"></el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </el-form-item>
              </el-row>
              <el-row :gutter="20">
                  <el-form-item>
                    <el-col :span="24" :md="24">
                      <label class="head_inputform">หมายเหตุ</label>
                      <el-input type="textarea" rows='5'></el-input>
                  </el-col>
                  </el-form-item>
                </el-row>
                <el-row :gutter="20">
                    <el-form-item style="float:right;">
                      <el-col :span="24" :md="24">
                        <el-button type="success">บันทึก</el-button>
                        <el-button type="success">บันทึก & ขออนุมัติ</el-button>
                    </el-col>
                    </el-form-item>
                  </el-row>
            </el-form>

            <el-dialog
              title="เพิ่มสินค้า"
              :visible.sync="dialogVisible"
              width="50%"
              :before-close="handleSave">
              <el-form ref="form" :model="form">
                <el-row :gutter="20">
                    <el-form-item>
                      <el-col :span="24" :md="12">
                        <label class="head_inputform">ค้นหาสินค้า</label>
                        <el-input class="form_input"></el-input>
                    </el-col>
                    </el-form-item>
                  </el-row>
                  <el-row :gutter="20">
                      <el-form-item>
                        <el-col :span="24" :md="12">
                          <label class="head_inputform">จำนวนที่ต้องการ</label>
                          <el-input class="form_input"></el-input>
                      </el-col>
                      </el-form-item>
                    </el-row>
                    <el-row :gutter="20">
                        <el-form-item>
                          <el-col :span="24" :md="12">
                            <label class="head_inputform">หน่วย</label>
                            <el-select class="form_input"  placeholder="please select your zone">
                              <el-option label="Zone one" value="shanghai"></el-option>
                              <el-option label="Zone two" value="beijing"></el-option>
                          </el-select>
                        </el-col>
                        </el-form-item>
                      </el-row>
                      <el-row :gutter="20">
                          <el-form-item>
                            <el-col :span="24" :md="12">
                              <label class="head_inputform">ราคา/หน่วย</label>
                              <el-input class="form_input">
                                <template slot="append">บาท</template>
                              </el-input>
                          </el-col>
                          </el-form-item>
                        </el-row>
                      <el-row :gutter="20">
                          <el-form-item>
                            <el-col :span="24" :md="12">
                              <label class="head_inputform">วันที่</label><br>
                              <el-date-picker
                                style="width:100%;"
                                class="form_input"
                                v-model="value1"
                                type="date"
                                placeholder="Pick a day">
                              </el-date-picker>
                          </el-col>
                          </el-form-item>
                        </el-row>
                        <el-row :gutter="20">
                            <el-form-item>
                              <el-col :span="24" :md="12">
                                <label class="head_inputform">เอกสารแนบ</label>
                                <el-upload
                                  class="form_input"
                                  drag
                                  action=""
                                  :on-preview="handlePreview"
                                  :on-remove="handleRemove"
                                  :file-list="fileList"
                                  multiple>
                                  <i class="el-icon-upload"></i>
                                  <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
                                  <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
                                </el-upload>
                            </el-col>
                            </el-form-item>
                          </el-row>
              </el-form>

              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="success" @click="dialogVisible = false">บันทึก</el-button>
              </span>
            </el-dialog><br>

            <el-row style="margin-left:8%;" :gutter="20" >
              <el-col :span="9" :md="9"><hr></el-col>
              <el-col :span="6" :md="4"><h6>August 17,2018</h6></el-col>
              <el-col :span="9" :md="9"><hr></el-col>
            </el-row><br>

            <el-card class="box-card">
              <div v-for="o in 2" :key="o" class="text item">
                <!-- {{'List item ' + o }} -->
                <el-row :gutter="20">
                  <el-col :span="6" :md="4">
                    <img src="src/assets/examples/userimg.png">
                  </el-col>
                  <el-col :span="24" :md="20">
                    <div style="padding: 14px; width:80%">
                      <div style="background-color:lightgray;">
                        <p>
                          Note by YourCommpany, Administrator-6 days ago
                        </p>
                        <ul>
                          <li>Request Name:tester</li>
                          <li>Code:PR-00006</li>
                          <li>Start date:August 17,2018</li>
                          <li>End date:August 17,2018</li>
                          <li>Requested by:Administrator</li>
                          <li>Approver:Administrator</li>
                          <li>Status:Draft</li>
                        </ul>
                      </div>
                    </div>
                  </el-col>
                </el-row>



              </div>
            </el-card>

          </div>



        </template>

<script>
export default {
    data() {
      return {
        value1: '',
        dialogVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData2:[{
          product: 'Ram DDR3',
          amount : 2,
          unit: 'ชิ้น',
          perunit: 2234,
          date: '15-05-2018'
        }, {
          product: 'Mainboard',
          amount : 1,
          unit: 'ชิ้น',
          perunit: 4234,
          date: '18-05-2018'
        }]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      indexMethod(index) {
        return index;
      }
    }
  }
</script>

<style>
  .head_inputform{
    margin-bottom: -5px;
    font-size: 12px;
    float: left !important;
  }
  .form_input{
    float:left;
    width:100%;
  }
  img {
    float: left;
    border-radius: 50%;
    width: 250px;
    height: 250px;
  }


</style>
