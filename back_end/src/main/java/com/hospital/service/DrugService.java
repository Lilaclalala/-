package com.blueachieve.hospital.service;

import com.blueachieve.hospital.entity.po.Drug;
import com.blueachieve.hospital.entity.vo.DrugPageVo;

public interface DrugService {

    /**
     * 查询药物 - 分页
     */
    DrugPageVo findDrugsPage(Integer pageNum, Integer pageSize, String drName);

    /**
     * 查询药物
     */
    Drug findDrug(Integer drId);

    /**
     * 减少药物数量
     */
    Boolean reduceDrugNumber(Integer drId, Integer usedNumber);

    /**
     * 添加药物
     */
    Boolean addDrug(Drug drug);

    /**
     * 删除药物
     */
    Boolean deleteDrug(Integer drId);

    /**
     * 修改药物
     */
    Boolean modifyDrug(Drug drug);

}
