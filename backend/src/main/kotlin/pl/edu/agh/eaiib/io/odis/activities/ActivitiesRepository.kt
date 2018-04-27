package pl.edu.agh.eaiib.io.odis.activities

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface ActivitiesRepository : MongoRepository<NetworkActivity, String>
{
    fun findActivitiesBySrcAddressHostIpOrDestAddressHostIp(ip1 : String, ip2 : String) : List<NetworkActivity>
    fun findByTimestampBetween(begin: Long, end: Long): List<NetworkActivity>
    fun findActivitiesByTimestampBetweenAndSrcAddressHostIpOrDestAddressHostIp(begin: Long, end: Long, ip1: String, ip2: String): List<NetworkActivity>
}