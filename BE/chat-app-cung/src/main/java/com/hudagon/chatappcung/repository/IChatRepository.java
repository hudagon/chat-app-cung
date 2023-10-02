package com.hudagon.chatappcung.repository;

import com.hudagon.chatappcung.model.entity.TempMessage;
import com.hudagon.chatappcung.model.payload.MessageBoxResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IChatRepository extends JpaRepository<TempMessage, Long> {

    @Query(
            value = " SELECT * FROM TEMP_MESSAGE " +
                    " order by TEMP_MESSAGE.ID desc " +
                    " limit 20 ",
            nativeQuery = true
    )
    List<TempMessage> getLatest20();
}
