package com.blueachieve.hospital.service;

import com.blueachieve.hospital.entity.po.Doctor;
import com.blueachieve.hospital.entity.vo.DoctorListVo;
import com.blueachieve.hospital.entity.vo.DoctorPageVo;
import com.blueachieve.hospital.entity.vo.user.DoctorUserVo;

public interface DoctorUserService {

    /**
     * 医生登录
     */
    DoctorUserVo login(Integer dId, String dPassword);

    /**
     * 查询所有医护人员信息 - 分页
     */
    DoctorPageVo findDoctorPage(Integer pageNum, Integer pageSize, String query);

    /**
     * 通过id查找医生
     */
    Doctor findDoctor(Integer dId);

    /**
     * 添加医生
     */
    Boolean addDoctor(Doctor doctor);

    /**
     * 删除医生
     */
    Boolean deleteDoctor(int dId);

    /**
     * 更新医生信息
     */
    Boolean updateDoctor(Doctor doctor);

    /**
     * 通过科室查询医生
     */
    DoctorListVo findDoctorBySection(String dSection);

    /**
     * 通过科室查询所有医生信息 - 分页
     */
    DoctorPageVo findDoctorBySectionPage(
            Integer pageNum, Integer pageSize, String dName, String arrangeDate, String dSection
    );

    /**
     * 更新评价
     */
    Boolean updateStar(Integer dId, Double dStar);

}
