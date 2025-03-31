package com.shanzhu.hospital.entity.vo;

import com.shanzhu.hospital.entity.po.Doctor;
import lombok.Data;

import java.util.List;


@Data
public class DoctorListVo {

    /**
     * 医生列表
     */
    private List<Doctor> doctors;
}

  