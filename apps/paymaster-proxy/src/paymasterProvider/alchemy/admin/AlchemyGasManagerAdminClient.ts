import type { AlchemyGasManagerPolicyRules } from '@/paymasterProvider/alchemy/admin/alchemyGasManagerAdminActions'
import {
  createAlchemyGasManagerPolicy,
  deleteAlchemyGasManagerPolicy,
  getAlchemyGasManagerPolicy,
} from '@/paymasterProvider/alchemy/admin/alchemyGasManagerAdminActions'

export class AlchemyGasManagerAdminClient {
  private appId: string
  private accessKey: string

  constructor({ appId, accessKey }: { appId: string; accessKey: string }) {
    this.appId = appId
    this.accessKey = accessKey
  }

  public async createPolicy({
    policyName,
    policyType,
    rules,
  }: {
    policyName: string
    policyType: string
    rules: AlchemyGasManagerPolicyRules
  }) {
    return await createAlchemyGasManagerPolicy({
      accessKey: this.accessKey,
      policyName,
      policyType,
      appId: this.appId,
      rules,
    })
  }

  public async getPolicy(policyId: string) {
    return await getAlchemyGasManagerPolicy({
      accessKey: this.accessKey,
      policyId,
    })
  }

  public async deletePolicy(policyId: string) {
    return await deleteAlchemyGasManagerPolicy({
      accessKey: this.accessKey,
      policyId,
    })
  }
}
